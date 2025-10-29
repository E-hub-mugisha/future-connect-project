<!DOCTYPE html>
<html>
<head>
    <title>Product Status Update</title>
</head>
<body>
    <h2>Hello {{ $product->seller->company_name }},</h2>
    <p>Your product <strong>{{ $product->name }}</strong> has been <strong>{{ ucfirst($product->status) }}</strong>.</p>
    @if($product->status == 'approved')
        <p>Your product is now visible in the store.</p>
    @else
        <p>Please review your product and resubmit if necessary.</p>
    @endif
    <p>Thank you,<br>Admin Team</p>
</body>
</html>
