import equipas from "./equipas.json";

interface Equipa {
  nome: string;
  titulos: string | string[]; 
}

interface EquipasComID extends Equipa {
  id: number;
}

function procuraEquipa(equipasJson: string): EquipasComID[];
function procuraEquipa(equipasJson: string, filtro: (equipa: EquipasComID) => boolean): EquipasComID[];
function procuraEquipa(equipasArray: Equipa[]): EquipasComID[];
function procuraEquipa(equipasArray: Equipa[], filtro: (equipa: EquipasComID) => boolean): EquipasComID[];

function procuraEquipa(
  equipasInput: string | Equipa[],
  filtro?: (equipa: EquipasComID) => boolean
): EquipasComID[] {
  let equipas: Equipa[];

  if (typeof equipasInput === "string") {
    equipas = JSON.parse(equipasInput);
  } else {
    equipas = equipasInput;
  }

  const equipasComID: EquipasComID[] = equipas.map((equipa, index) => ({
    ...equipa,
    id: index + 1,
  }));

  if (filtro) {
    return equipasComID.filter(filtro);
  }

  return equipasComID;
}

console.log(
  procuraEquipa(JSON.stringify(equipas), ({ nome }) => nome === "LEC")
);

console.log(
  procuraEquipa(equipas, ({ nome }) => nome === "LEIT")
);