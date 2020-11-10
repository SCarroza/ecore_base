export interface ButtonExperience {
  iconfather: string;
  coloriconfather: string;
  iconchild: string;
  coloriconchild: string;
  title: string;
  subtitle: string;
  porcentage: number;
  colorprogressbar: string;
  data: ButtonData;
}

interface ButtonData {
  [index: number]: { 
    id: number;
    year: number;
    text: string;
  };
}