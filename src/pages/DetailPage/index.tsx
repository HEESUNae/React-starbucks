import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledDetailPage } from './style';
import { useAppSelector } from '../../state/hooks';
import { getFavoriteList } from '../../state/listSlice';
import { Button, Layout } from '../../const/lazy';

const DetailPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const favoriteList = useAppSelector((state) => state.list.favoriteList);
  const [isActive, setIsActive] = useState(false);

  // 찜 추가,삭제
  const onFavorite = () => {
    const hasList = favoriteList.some((item) => item.name === location.state.name);
    setIsActive(hasList ? false : true);
    dispatch(getFavoriteList(location.state));
    setTimeout(() => {
      navigation('/favorite');
    }, 500);
  };

  // 찜 여부 확인
  useEffect(() => {
    const hasList = favoriteList.some((item) => item.name === location.state.name);
    setIsActive(hasList ? true : false);
  }, []);

  return (
    <StyledDetailPage>
      <Layout>
        <div className="inner">
          <h2 className="sec-title">상세보기</h2>
          <div className="coffee-info">
            <figure>
              <img src={location.state.imageUrl} alt="" />
            </figure>
            <div className="info">
              <h3>{location.state.name}</h3>
              <p>{location.state.enName}</p>
              <p className="desc">{location.state.desc}</p>
              <div className={`btn-container ${isActive && 'active'}`}>
                <Button title={isActive ? '찜삭제' : '찜하기'} onClick={onFavorite} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </StyledDetailPage>
  );
};

export default DetailPage;
