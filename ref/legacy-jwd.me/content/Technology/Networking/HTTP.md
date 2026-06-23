HTTP ("HyperText Transfer Protocol") is the protocol the [[web]] runs on.

At a high level it's request/response:
- client sends a method (`GET`, `POST`, etc.)
- server sends back a status code, headers, and optionally a body

Classic HTTP traffic is unencrypted plaintext over [[TCP]], usually on [[port 80]]. [[HTTPS]] is the secure version used in practice for real sites.

It is also stateless by default, so sessions/auth are usually handled with cookies or tokens layered on top.
