import React from 'react';
import { Card } from 'antd';
import './WorkCard_styles.css';

const { Meta } = Card;

// カードクリック時の遷移先 MEMO: 再生画面か詳細画面か考え中
const redirectPath = '/nowPlaying';

interface WorkCardItemType {
    title: string,
    description: string,
    coverImage: React.ReactNode,
    isHover?: boolean,
    style: React.CSSProperties,
    titleLinkPath?: string,
    describeLinkPath?: string
}

/**
 * 作品一覧用のカードコンポーネント
 * @constructor
 */
const WorkCard:(workCardItem: WorkCardItemType) => JSX.Element = (workCardItem: WorkCardItemType) => {

  const title            = workCardItem.title;
  const description      = workCardItem.description;
  const coverImage       = workCardItem.coverImage;
  const isHover          = (workCardItem.isHover === true)
  const style            = workCardItem.style;
  const titleLinkPath    = workCardItem.titleLinkPath;
  const describeLinkPath = workCardItem.describeLinkPath;


  return (
      <Card
          onClick={() => {showDetail(workCardItem);}}
          className='over-lay'
          hoverable={isHover}
          style={style}
          cover={coverImage}
      >
          <Meta
              title={<a href={titleLinkPath} style={{color:'rgb(0,0,0)'}}>{title}</a>}
              description={<a href={describeLinkPath} style={{color:'rgb(98,98,98)'}}>{description}</a>}/>
      </Card>
  );
}

export {WorkCard, type WorkCardItemType};

/**
 * 作品情報をstateにセットして詳細に遷移する
 */
const showDetail:(workCardItem: WorkCardItemType) => void = (workCardItem: WorkCardItemType) => {
    // TODO: stateにセット
    console.log(workCardItem);

    window.location.href = redirectPath;
}