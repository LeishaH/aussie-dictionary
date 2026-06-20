function Photos({ photos }) {
  if (!photos) {
    return null;
  }

  return (
    <div className="Photos row mt-4">
      {photos.map((photo, index) => (
        <div className="col-4" key={index}>
          <a href={photo.url} target="_blank" rel="noreferrer">
            <img
              src={photo.src.landscape}
              alt={photo.alt}
              className="img-fluid rounded"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Photos;
