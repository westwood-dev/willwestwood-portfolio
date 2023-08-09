import GalleryView from './gallery';
import Detail from './detail';
import { useParams, Route, Routes } from 'react-router-dom';
import db from '../db/db.json';

function Work(props) {
  return (
    <div>
      <Routes>
        <Route
          path=""
          element={<GalleryView tag={'all'} view={props.view} />}
        />
        <Route
          path=":id"
          element={
            <>
              <GalleryDetail />
              <GalleryView tag={'all'} view={props.view} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

function GalleryDetail() {
  let { id } = useParams();

  // console.log(id);

  let tempID;

  if (id) {
    let fixedTitle = id.replace('/-/g', ' ');
    tempID = db.findIndex((x) => x.title === fixedTitle);
  }
  // console.log(id, tempID)

  if (id && Number(tempID) < db.length && Number(tempID) >= 0) {
    return <Detail detailID={tempID} />;
  } else {
    return null;
  }
}

export default Work;
