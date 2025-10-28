<!DOCTYPE html>
<html>
<head>
    <title>Seller Approved</title>
</head>
<body>
    <h3>Hi {{ $user->name }},</h3>
    <p>Congratulations! Your seller application has been approved.</p>
    <p>Your login credentials for Future Connect Shop:</p>
    <ul>
        <li><strong>Email:</strong> {{ $user->email }}</li>
        <li><strong>Password:</strong> {{ $password }}</li>
    </ul>
    <p>Please log in and change your password after your first login.</p>
    <p><a href="{{ url('/login') }}">Login Here</a></p>
    <p>Thanks,<br>Future Connect Team</p>
</body>
</html>
