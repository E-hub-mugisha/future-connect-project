<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_sponsorship_id',
        'diaspora_account_id',
        'amount',
        'currency',
        'payment_gateway',
        'transaction_id',
        'status',
        'response',
    ];

    protected $casts = [
        'response' => 'array',
    ];

    public function sponsorship()
    {
        return $this->belongsTo(ProjectSponsorship::class, 'project_sponsorship_id');
    }

    public function diaspora()
    {
        return $this->belongsTo(DiasporaAccount::class, 'diaspora_account_id');
    }
}
