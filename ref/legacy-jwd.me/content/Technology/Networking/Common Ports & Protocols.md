A quick cheat sheet I use a lot:

- [[FTP]]: 21/TCP
- [[SSH]]: [[port 22]]/TCP
- [[HTTP]]: [[port 80]]/TCP
- [[HTTPS]]: [[port 443]]/TCP
- [[Postgres]]: 5432/TCP

Notes:
- Most of these are conventions, not hard requirements. Services can run on non-standard ports.
- Port numbers only tell you where to connect. The protocol still matters ([[TCP]] vs [[UDP]], handshake behavior, encryption, etc.).
