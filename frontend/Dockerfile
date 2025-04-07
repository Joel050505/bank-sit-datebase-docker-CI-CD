FROM node:20-alpine

# Sätt arbetskatalogen
WORKDIR /app

# Kopiera bara package-filer först (för cache-optimering)
COPY package*.json ./

# Installera beroenden
RUN npm install

# Kopiera resten av projektet
COPY . .

# Bygg Next.js för produktion
RUN npm run build

# Exponera porten
EXPOSE 3000

# Starta Next.js i produktion
CMD ["npm", "start"]