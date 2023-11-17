import { useNavigate } from 'react-router-dom';
import { StyledFavoritePage } from './style';
import { useAppSelector } from '../../state/hooks';
import { Button, Layout } from '../../const/lazy';

const FavoritePage = () => {
  const navigation = useNavigate();
  const favoriteList = useAppSelector((state) => state.list.favoriteList);

  return (
    <StyledFavoritePage>
      <Layout>
        <main>
          <section>
            <div className="inner">
              <h2 className="sec-title">찜목록</h2>
              {favoriteList.length > 0 ? (
                <ul>
                  {favoriteList.map((item) => (
                    <li key={item.name}>
                      <figure onClick={() => navigation('/detail', { state: item })}>
                        <img src={item.imageUrl} alt="" />
                      </figure>
                      <div className="info">
                        <h3>{item.name}</h3>
                        <p className="en-name">{item.enName}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>찜 목록이 없습니다. 메인화면에서 좋아하는 커피를 찜해보세요</p>
              )}
              <div className="btn-container">
                <Button title="메인으로 이동" onClick={() => navigation('/')} />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </StyledFavoritePage>
  );
};

export default FavoritePage;
