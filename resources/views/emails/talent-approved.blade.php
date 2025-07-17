<!DOCTYPE html>
<html>
<head>
    <title>Talent Account Approved</title>
</head>
<body>
    <h2>Hello {{ $user->name }},</h2>

    <p>Your talent profile has been approved on our platform.</p>

    <p><strong>You can now log in with the following credentials:</strong></p>
    <p>
        Email: <strong>{{ $user->email }}</strong><br>
        Password: <strong>{{ $password }}</strong>
    </p>

    <p>Login here: <a href="{{ url('/login') }}">{{ url('/login') }}</a></p>

    <p>Please consider changing your password after your first login for security.</p>

    <p>Thank you,<br>The Admin Team</p>
</body>
</html>
