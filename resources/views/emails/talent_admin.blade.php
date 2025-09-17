<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Talent Registration</title>
</head>
<body>
    <h2>New Talent Registered</h2>

    <p>A new talent profile has been submitted:</p>
    <ul>
        <li><strong>Name:</strong> {{ $talent->name }}</li>
        <li><strong>Email:</strong> {{ $talent->email ?? 'Not provided' }}</li>
        <li><strong>Phone:</strong> {{ $talent->phone ?? 'Not provided' }}</li>
        <li><strong>Category:</strong> {{ $talent->category->name ?? 'N/A' }}</li>
        <li><strong>Featured:</strong> {{ $talent->featured ? 'Yes' : 'No' }}</li>
        <li><strong>Description:</strong> {{ $talent->description ?? 'No description provided' }}</li>
    </ul>

    <p>Visit the admin dashboard to review and approve this submission.</p>

    <p>Regards,<br>
    <strong>System Notification</strong></p>
</body>
</html>
