import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';


function Home() {
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

export default Home;
