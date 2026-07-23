<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectApplication extends Model
{
    protected $fillable = ['project_id', 'name', 'email', 'message', 'portfolio_url', 'status'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

}
