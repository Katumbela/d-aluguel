import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

const fetchDataFromFirestore = async () => {
  const projectosCollection = collection(db, 'projetos');

  try {
    const querySnapshot = await getDocs(projectosCollection);

    const data = querySnapshot.docs.map((doc) => {
      const projecto = doc.data();

      const fotoUrls = projecto.fotoUrls.map((url, index) => ({
        index,
        url,
      }));

      const imagens = projecto.imagens.map((imagem) => ({
        name: imagem.name,
        url: imagem.url,
      }));

      return {
        ano: projecto.ano,
        descricao: projecto.descricao,
        dia: projecto.dia,
        email: projecto.email,
        endereco: projecto.endereco,
        fotoUrls,
        id: projecto.id,
        imagens,
        marca: projecto.marca,
        minimo: projecto.minimo,
        modelo: projecto.modelo,
        nome: projecto.nome,
        oitoh: projecto.oitoh,
        semana: projecto.semana,
        uid: projecto.uid,
        ummes: projecto.ummes,
      };
    });

    return data;
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    throw error;
  }
};

const getCursosData = async () => {
  const cursos = await fetchDataFromFirestore();
  return cursos;
};

export default getCursosData;
