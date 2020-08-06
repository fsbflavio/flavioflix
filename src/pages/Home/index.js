import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <Menu />

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((item, index) => {
        if (index === 0) {
          return (
            <div key={item.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="descrição video"
              />

              <Carousel
                ignoreFistVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={item.id}
            category={dadosIniciais[index]}
          />
        );
      })}

      {/*<BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="descrição video"
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
      />*/}

    </PageDefault>
  );
}

export default Home;
