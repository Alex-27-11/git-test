// в задании было написано добавить описание, а в макете было добавлены топики, по этому добавил все

import React from 'react';
import cl from './RightBloc.module.scss';
import { ReposInterfaceMin } from '../../models/models';
import Star from '../../assets/star.svg';

interface RightBlocProps {
	selectedRow: ReposInterfaceMin | null;
 }

const RightBloc: React.FC<RightBlocProps> = ({selectedRow}) => {

  const {
    name,
    language,
    topics,
    description,
    stargazers_count,
    license,
  } = selectedRow || {};

  return (
    <section className={cl.rightBloc}>
      <div className={cl.container}>
        {selectedRow && (<>
		  <h1 className={cl.title}>{name || 'No name provided'}</h1>
		  <div className={cl.columns}>
			<div className={cl.rightColumn}>
				{language ? <div className={cl.language}>{language }</div> : <div className={cl.noLanguage}>No language specified</div>}
				<div className={cl.topics}>
				{topics && topics.length > 0 ? (
						topics.map((topic) => (
							<div key={topic} className={cl.topic}>
								{topic}
							</div>
						))
						) : (
						<div className={cl.noTopics}>No topics available</div>
						)}
				</div>
				{description ? <div className={cl.description}>{description}</div> : <div className={cl.noDescription}>No description available</div>}
				{license ? <div className={cl.license}>{license.name}</div> : <div className={cl.noLicense}>No license specified</div>}
			</div>
			<div className={cl.leftColumn}>
				<img src={Star} alt="Star" className={cl.starIcon} />
				<div className={cl.stargazersCount}>{stargazers_count || 0}</div>
			</div>
		  </div>
		  </>)}
		  {!selectedRow && <div className={cl.noSelected}>Выберите репозитарий</div>}
      </div>
    </section>
  );
};

export default RightBloc;