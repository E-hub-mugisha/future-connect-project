@extends('layouts.guest')

@section('title', 'My Cart')

@section('content')
<div class="container py-5">
    <h2 class="mb-4"><i class="bi bi-cart-fill me-2"></i>My Shopping Cart</h2>

    @if(session('success'))
        <div class="alert alert-success rounded-3">{{ session('success') }}</div>
    @endif

    @if($cartItems->count() > 0)
    <div class="card shadow-sm rounded-4">
        <div class="card-body p-4">
            <div class="table-responsive">
                <table class="table align-middle text-center mb-0">
                    <thead class="table-light">
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php $grandTotal = 0; @endphp
                        @foreach($cartItems as $key => $item)
                            @php 
                                $itemTotal = $item->quantity * $item->product->price;
                                $grandTotal += $itemTotal;
                            @endphp
                            <tr>
                                <td>{{ $key + 1 }}</td>
                                <td class="text-start d-flex align-items-center">
                                    <img src="{{ asset('storage/'.$item->product->image) }}" alt="{{ $item->product->name }}" width="60" class="rounded me-2">
                                    <span>{{ $item->product->name }}</span>
                                </td>
                                <td>${{ number_format($item->product->price, 2) }}</td>
                                <td>
                                    <input type="number" class="form-control quantity-input" min="1" max="{{ $item->product->stock ?? 1000 }}" value="{{ $item->quantity }}" 
                                        data-id="{{ $item->id }}" 
                                        data-price="{{ $item->product->price }}">
                                </td>
                                <td class="item-total" id="item-total-{{ $item->id }}" data-total="{{ $itemTotal }}">
                                    ${{ number_format($itemTotal, 2) }}
                                </td>
                                <td>
                                    <form action="{{ route('cart.remove', $item->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-outline-danger btn-sm rounded-pill">
                                            <i class="bi bi-trash"></i> Remove
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            <!-- Grand Total -->
            <div class="d-flex justify-content-end align-items-center mt-4">
                <h4 class="me-4">Grand Total: $<span id="grand-total">{{ number_format($grandTotal, 2) }}</span></h4>
                <a href="{{ route('checkout.index') }}" class="btn btn-primary btn-lg rounded-pill">Proceed to Checkout</a>
            </div>
        </div>
    </div>
    @else
        <div class="alert alert-info rounded-3 text-center">
            Your cart is empty. <a href="{{ route('products.index') }}" class="text-decoration-underline">Browse Products</a>
        </div>
    @endif
</div>
@endsection

@push('scripts')
<script>
document.addEventListener('DOMContentLoaded', function() {
    const quantityInputs = document.querySelectorAll('.quantity-input');

    function updateGrandTotal() {
        let grandTotal = 0;
        document.querySelectorAll('.item-total').forEach(el => {
            grandTotal += parseFloat(el.dataset.total) || 0;
        });
        document.getElementById('grand-total').textContent = grandTotal.toFixed(2);
    }

    quantityInputs.forEach(input => {
        const id = input.dataset.id;
        const price = parseFloat(input.dataset.price);
        const itemTotalEl = document.getElementById('item-total-' + id);

        // Initialize item total on page load
        itemTotalEl.dataset.total = (price * input.value).toFixed(2);

        input.addEventListener('input', function() {
            const quantity = parseInt(this.value) || 1;
            const total = (quantity * price).toFixed(2);

            // Update item total
            itemTotalEl.textContent = '$' + total;
            itemTotalEl.dataset.total = total;

            // Update grand total
            updateGrandTotal();

            // Optional: send AJAX to update quantity in DB
            fetch(`/cart/${id}/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                body: JSON.stringify({ quantity: quantity })
            });
        });
    });

    // Initial grand total calculation
    updateGrandTotal();
});
</script>
@endpush
