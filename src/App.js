import React from 'react';
import Menu from './componets/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componets/BannerMain';
import Carousel from './componets/Carousel';


function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"descrição video"}
      />

      <Carousel
        ignoreFistVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFistVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFistVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFistVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFistVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFistVideo
        category={dadosIniciais.categorias[5]}
      />
    </div>
  );
}

export default App;
