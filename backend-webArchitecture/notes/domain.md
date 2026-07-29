\* `https://` → \*\*protocol (scheme)\*\* ✔

\* `www` → \*\*subdomain\*\* ✔ (but optional, not special anymore)

\* `scrimba` → \*\*second-level domain (SLD)\*\* (this is what people casually call "domain")

\* `.com` → \*\*top-level domain (TLD)\*\* ✔



So full structure:



```

https://www.scrimba.com

│       │   │      └── TLD

│       │   └──────── SLD (domain name)

│       └──────────── subdomain

└──────────────────── protocol

```



Now the part people usually miss:



\### 1. "www" is not required



You can have:



```

https://scrimba.com

https://api.scrimba.com

https://dev.internal.scrimba.com

```



All valid. `www` is just convention.



\### 2. Domain ≠ just "scrimba"



Technically:



```

scrimba.com = domain (SLD + TLD)

```



\### 3. Real full URL includes more parts



Example:



```

https://api.scrimba.com:443/courses?id=10#section

```



Breakdown:



\* `https` → protocol

\* `api` → subdomain

\* `scrimba.com` → domain

\* `:443` → port

\* `/courses` → path

\* `?id=10` → query params

\* `#section` → fragment



\### 4. Hierarchy matters (DNS resolution)



```

.com → scrimba.com → api.scrimba.com

```



Right to left = ownership tree.



