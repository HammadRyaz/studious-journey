# learning Web architecture and fundamental

## 🌐 Networking & Web Basics

### 1. Internet (Network of Networks)

* **Description:** Basic level par Internet routers aur servers ka aik bohot bada network hai jo clients (jaise aapka laptop ya mobile) ke darmiyan data transfer karta hai.
* **Syntax:** N/A
* **Example:** N/A

### 2. Data Packets

* **Description:** Jab bhi internet par koi data bheja jata hai, toh usay chhote-chhote tukdon mein kaat diya jata hai, jinhein **Packets** kehte hain. Routers in packets ko rasta dikhate hain jab tak yeh apni sahi destination tak na pohanch jayein.
* **Syntax:** N/A
* **Example:** N/A

### 3. Anatomy of a Web Address (URL)

* **Description:** Kisi bhi website ke address ke alag-alag hissay hote hain jo browser ko server tak pohanchne mein madad karte hain.
* **Syntax:** `[protocol]://[subdomain].[domain].[top-level-domain]`
* **Example:** `[https://www.scrimba.com](https://www.scrimba.com)`
* `https` = Protocol (Browser ko batata hai ki server se kaise communicate karna hai)
* `www` = Subdomain (Website ka aik specific section, aksar optional hota hai)
* `scrimba` = Domain (Human-readable naam jo insaan aasani se yaad rakh sakein)
* `com` = Top-Level Domain / TLD (Extension jo domain ko classify karti hai)



### 4. IP Address (Internet Protocol Address)

* **Description:** Network par majood har device (computer, phone, server) ka aik unique numerical label ya number hota hai, taaki computer aapas mein aik dusre ko pehchan sakein aur communicate kar sakein.
* **Syntax:** `[Number].[Number].[Number].[Number]` (IPv4)
* **Example:** `104.21.68.237`

### 5. DNS (Domain Name System)

* **Description:** Yeh internet ka phonebook hai. Insaano ke samajhne wale web address (jaise `scrimba.com`) ko computers ke samajhne wale IP address mein convert karne ke process ko **Resolving the Domain** kehte hain, aur yeh kaam DNS karta hai.
* **Syntax:** N/A
* **Example:** `scrimba.com` ➡️ `DNS Resolve` ➡️ `104.21.68.237`
