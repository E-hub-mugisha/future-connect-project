<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Talent Approved Notification</title>
</head>
<body>
    <p>Hello,</p>
    <p>
        The following talent has been approved:
    </p>
    <p>
        <strong>Name:</strong> {{ $talent->name }}<br>
        <strong>Email:</strong> {{ $talent->email }}<br>
        <strong>Status:</strong> {{ $talent->status }}
    </p>
    <p>
        A user account has been created for this talent.
    </p>
    <p>Regards,<br>The System</p>
</body>
</html>
