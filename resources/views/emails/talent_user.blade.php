<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome to Talent Platform</title>
</head>
<body>
    <h2>Hello {{ $talent->name }},</h2>

    <p>Thank you for registering your talent with us!</p>

    <p>Here’s a quick summary of your submission:</p>
    <ul>
        <li><strong>Name:</strong> {{ $talent->name }}</li>
    <!-- unhashed password -->
        <li><strong>Password:</strong> {{ $password }}</li>
        <li><strong>Category:</strong> {{ $talent->category->name ?? 'N/A' }}</li>
        <li><strong>Description:</strong> {{ $talent->description ?? 'No description provided' }}</li>
        <li><strong>Phone:</strong> {{ $talent->phone ?? 'Not provided' }}</li>
        <li><strong>Email:</strong> {{ $talent->email }}</li>
    </ul>

    <p>We’ll review your profile and reach out if we need more details. In the meantime, feel free to explore our platform.</p>

    <p>Warm regards,<br>
    <strong>Talent Platform Team</strong></p>
</body>
</html>
