
---

```markdown
# 🪙 TAVIOCOIN (TAV)

**TavioCoin** es un token ERC-20 creado con fines experimentales dentro del ecosistema Polygon.  

---


## 🧠 Características principales

- **Estándar:** ERC-20  
- **Blockchain:** Polygon
- **Lenguaje:** Solidity  
- **Compilador:** ^0.9.x  
- **Supply inicial:** configurable  
- **Propietario:** cuenta del deployer  

---

## 📦 Estructura del repositorio

```

taviocoin/
├── contracts/
│   └── TavioCoin.sol        # Contrato principal ERC-20
├── abi/
│   └── TavioCoinABI.json    # ABI exportada para integraciones frontend
├── scripts/
│   └── deploy.js            # Script de despliegue (Hardhat o similar)
├── package.json
└── README.md

````

---

## ⚙️ Instalación y uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/TAVI0/taviocoin.git
cd taviocoin
````

### 2. Instalar dependencias

```bash
npm install
```

### 3. Compilar el contrato

```bash
npx hardhat compile
```

### 4. Desplegar en testnet

Configura tus credenciales en `.env`:

```bash
PRIVATE_KEY=tu_clave_privada
INFURA_API_KEY=tu_api_key
```

Y ejecuta:

```bash
npx hardhat run scripts/deploy.js --network polygon
```

---

## 🌐 Links relacionados

* **Frontend (Playroom):** próximamente
* **Polygonscan (contrato):** https://polygonscan.com/

---

## 🛠️ Tecnologías

| Categoría       | Herramienta            |
| --------------- | ---------------------- |
| Smart Contracts | Solidity, OpenZeppelin |
| Framework       | Hardhat                |
| Integración     | Ethers.js              |
| Frontend        | React + Vite           |
| Red             | Polygon                |

---
