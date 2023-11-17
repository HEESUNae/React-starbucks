import { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { StyledMainPage } from './style';
import { coffeeImg } from '../../const/image';
import { useAppSelector } from '../../state/hooks';
import { CoffeeListItem, Layout } from '../../const/lazy';

const MainPage = () => {
  const navigation = useNavigate();
  const lists = useAppSelector((state) => state.list.list);
  const picter = useRef(null);

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      const distanse = window.scrollY - 500;
      gsap.to(picter.current, { right: distanse >= 0 ? 0 : distanse });
    });
  });

  return (
    <StyledMainPage>
      <Layout>
        <main className="main-page">
          <section className="main-visual">
            <div className="inner">
              <figure className="coffee01">
                <img src={coffeeImg.coffee01} alt="" />
              </figure>
              <figure className="coffee02">
                <img src={coffeeImg.coffee02} alt="" />
              </figure>
              <figure className="coffee03">
                <img src={coffeeImg.coffee03} alt="" />
              </figure>
              <figure className="coffee04">
                <img src={coffeeImg.coffee04} alt="" />
              </figure>
            </div>
          </section>
          <section className="main-coffee">
            <div className="inner">
              <div className="info">
                <h2 className="sec-title">PICK YOUR FAVORITE</h2>
                <p>다양한 메뉴를 스타벅스에서 즐겨보세요.</p>
                <p>
                  스타벅스만의 특별함을 경험할 수 있는 최상의 선택 음료
                  <br />
                  스타벅스 커피와 완벽한 어울림을 자랑하는 푸드
                  <br />
                  다양한 시도와 디자인으로 가치를 더하는 상품
                  <br />
                  소중한 사람에게 마음을 전하는 가장 좋은 방법 스타벅스 카드
                </p>
              </div>
            </div>
            <figure className="picter" ref={picter}>
              <img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/christmas_img.png" alt="" />
            </figure>
          </section>
          <section className="main-recommend">
            <div className="inner">
              <div className="info">
                <h2 className="sec-title">전국 어디에서나 스타벅스와 함께!</h2>
                <p>스타벅스와 함께 커피 한잔의 여유를 가져보세요.</p>
              </div>
              <ul>
                {lists.map((item) => (
                  <CoffeeListItem key={item.name} item={item} onClick={() => navigation('/detail', { state: item })} />
                ))}
              </ul>
            </div>
          </section>
        </main>
      </Layout>
    </StyledMainPage>
  );
};

export default MainPage;
