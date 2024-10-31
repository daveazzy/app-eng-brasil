export function sanitizeFileName(name: string) {
    return name
      .toLowerCase()
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") // remover acentos
      .replace(/\s+/g, "-") // espaço para hifen
      .replace(/[^a-z0-9.-]/g, ""); // remover especiais
  }
  