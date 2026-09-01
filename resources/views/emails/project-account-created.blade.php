<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Account created</title>
</head>
<body style="margin:0; padding:0; background:#0e1618; font-family: 'DM Sans', Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0e1618; padding:40px 0;">
        <tr>
            <td align="center">
                <table width="480" cellpadding="0" cellspacing="0" style="background:#172124; border:1px solid #243033; border-radius:18px; overflow:hidden;">
                    <tr>
                        <td style="padding:32px;">
                            <h2 style="color:#F5f5f7; margin:0 0 6px; font-size:20px;">
                                Welcome, {{ $user->first_name }} 👋
                            </h2>
                            <p style="color:#9fb0ae; margin:0 0 24px; font-size:14px;">
                                Your project has been submitted and we've created a FutureConnect account for you.
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0e1618; border:1px solid #243033; border-radius:12px; margin-bottom:24px;">
                                <tr>
                                    <td style="padding:16px 20px;">
                                        <p style="color:#9fb0ae; font-size:12px; text-transform:uppercase; letter-spacing:.05em; margin:0 0 4px;">Email</p>
                                        <p style="color:#F5f5f7; font-size:14px; margin:0 0 14px;">{{ $user->email }}</p>

                                        <p style="color:#9fb0ae; font-size:12px; text-transform:uppercase; letter-spacing:.05em; margin:0 0 4px;">Temporary password</p>
                                        <p style="color:#48d597; font-size:16px; font-weight:700; margin:0;">{{ $password }}</p>
                                    </td>
                                </tr>
                            </table>

                            <p style="color:#9fb0ae; font-size:13px; margin:0 0 24px;">
                                For your security, please log in and change this password as soon as possible.
                            </p>

                            <a href="{{ $loginUrl }}" style="display:inline-block; background:#48d597; color:#06231a; font-weight:700; text-decoration:none; padding:12px 24px; border-radius:10px; font-size:14px;">
                                Log in to your account
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>