<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class DiasporaAccount extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'diaspora_accounts';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'display_name',
        'email',
        'phone',
        'country',
        'city',
        'passport_number',
        'id_document_path',
        'address_proof_path',
        'occupation',
        'bio',
        'purpose',
        'preferred_currency',
        'sponsorship_preferences',
        'links',
        'preferred_contact',
        'newsletter_opt_in',
        'password',
        'verification_status',
        'verification_notes',
        'verified_at',
        'verified_by',
        'user_id'
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'newsletter_opt_in' => 'boolean',
        'sponsorship_preferences' => 'array',
        'links' => 'array',
        'verified_at' => 'datetime',
    ];

    /**
     * Hide sensitive fields from serialization.
     */
    protected $hidden = [
        'password',
    ];

    /**
     * Relationship: Diaspora account verified by a User (admin/staff).
     */
    public function verifiedBy()
    {
        return $this->belongsTo(User::class, 'verified_by');
    }

    /**
     * Accessor for full name.
     */
    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /**
     * Accessor for ID document URL (if stored via Storage).
     */
    public function getIdDocumentUrlAttribute(): ?string
    {
        return $this->id_document_path
            ? Storage::url($this->id_document_path)
            : null;
    }

    /**
     * Accessor for proof of address document URL.
     */
    public function getAddressProofUrlAttribute(): ?string
    {
        return $this->address_proof_path
            ? Storage::url($this->address_proof_path)
            : null;
    }

    /**
     * Scope: Only verified accounts.
     */
    public function scopeVerified($query)
    {
        return $query->where('verification_status', 'verified');
    }

    /**
     * Scope: Only pending verification accounts.
     */
    public function scopePending($query)
    {
        return $query->where('verification_status', 'pending');
    }

    /**
     * Scope: Search by name, email, or phone.
     */
    public function scopeSearch($query, $term)
    {
        return $query->where(function ($q) use ($term) {
            $q->where('first_name', 'like', "%{$term}%")
                ->orWhere('last_name', 'like', "%{$term}%")
                ->orWhere('email', 'like', "%{$term}%")
                ->orWhere('phone', 'like', "%{$term}%");
        });
    }
    // protected static function booted()
    // {
    //     static::saving(function ($diaspora) {
    //         $diaspora->is_diaspora = $diaspora->country_of_origin !== $diaspora->current_country;
    //     });
    // }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
