import React from 'react';
import { Link } from 'react-router-dom';
import db from '../db/db.json';
import './css/gallery.css';

class gItem {
  constructor(id, size, cover, title, date) {
    this.id = id;
    this.size = size;
    this.cover = cover;
    this.title = title;
    this.date = date;
  }
}

function GalleryView(props) {
  var gItemsRenderArray = [];
  for (var i = 0; i < db.length; i++) {
    if (props.tag === 'all' || db[i].tag === props.tag) {
      gItemsRenderArray.push(
        new gItem(db[i].id, db[i].size, db[i].cover, db[i].title, db[i].date)
      );
    }
  }

  return (
    <div className="gItemsContainer">
      {gItemsRenderArray.map((item) => {
        return (
          <Link
            to={`/work/${createLinkTitle(item.title)}`}
            key={item.id}
            id={'gItem' + item.id}
            style={{
              backgroundImage: "url('" + item.cover + "')",
            }}
            className={'gItemHolder '} //+ item.size}
            onClick={() => {
              scrollTop();
            }}
          >
            <div className="gItemFader"></div>
            <div className="gItemDetailsHolder">
              <h1>{item.title}</h1>
              <p>{item.date}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function createLinkTitle(title) {
  return title.replace('/ /g', '-');
}

function scrollTop() {
  window.scrollTo(0, 0);
}

export default GalleryView;
