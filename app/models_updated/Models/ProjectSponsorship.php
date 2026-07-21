<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectSponsorship extends Model
{
    use HasFactory;

    protected $fillable = [
        'diaspora_account_id',
        'project_id',
        'amount',
        'currency',
        'message',
        'status',
    ];

    public function diaspora()
    {
        return $this->belongsTo(DiasporaAccount::class, 'diaspora_account_id');
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
