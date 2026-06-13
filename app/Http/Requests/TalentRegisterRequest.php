<?php

// app/Http/Requests/TalentRegisterRequest.php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TalentRegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Public form — no auth required
    }

    public function rules(): array
    {
        return [
            'name'        => ['required', 'string', 'min:3', 'max:100'],
            'address'     => ['required', 'string', 'max:200'],
            'phone'       => ['required', 'string', 'regex:/^\+?[0-9\s\-]{7,20}$/'],
            'email'       => ['required', 'email', 'max:180', 'unique:talents,email'],
            'language'    => ['required', 'string', 'max:100'],
            'category_id' => ['required', 'integer', 'exists:talent_categories,id'],
            'description' => ['nullable', 'string', 'max:1000'],
            'image'       => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'], // 5 MB
        ];
    }

    public function messages(): array
    {
        return [
            'name.required'        => 'Your full name is required.',
            'name.min'             => 'Name must be at least 3 characters.',
            'address.required'     => 'Please enter your location or address.',
            'phone.required'       => 'A phone number is required.',
            'phone.regex'          => 'Enter a valid phone number (e.g. +250 788 123 456).',
            'email.required'       => 'An email address is required.',
            'email.email'          => 'Please enter a valid email address.',
            'email.unique'         => 'This email is already registered. Try signing in instead.',
            'language.required'    => 'Please list at least one language you speak.',
            'category_id.required' => 'Select a talent category.',
            'category_id.exists'   => 'The selected category is invalid.',
            'description.max'      => 'Keep your bio under 1,000 characters.',
            'image.required'       => 'A profile photo is required.',
            'image.image'          => 'The file must be an image.',
            'image.mimes'          => 'Only JPG, PNG, or WebP images are accepted.',
            'image.max'            => 'Your photo must be smaller than 5 MB.',
        ];
    }
}