import React from "react";
import "./Create.css";

function Create() {
  return (
    <div>
      <div className="create">
        <div className="create__content">
          <div className="create__image-column">
            <div className="create__image-wrapper">
              <img
                alt="fonte da maia"
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab326263d2f8e8fb94f00f91f1dd9a90d7f33991041d74aeb0cc1b5e14c4733d?placeholderIfAbsent=true&apiKey=3844bdcc723b476d87e325492f777b0a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab326263d2f8e8fb94f00f91f1dd9a90d7f33991041d74aeb0cc1b5e14c4733d?placeholderIfAbsent=true&apiKey=3844bdcc723b476d87e325492f777b0a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab326263d2f8e8fb94f00f91f1dd9a90d7f33991041d74aeb0cc1b5e14c4733d?placeholderIfAbsent=true&apiKey=3844bdcc723b476d87e325492f777b0a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab326263d2f8e8fb94f00f91f1dd9a90d7f33991041d74aeb0cc1b5e14c4733d?placeholderIfAbsent=true&apiKey=3844bdcc723b476d87e325492f777b0a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab326263d2f8e8fb94f00f91f1dd9a90d7f33991041d74aeb0cc1b5e14c4733d?placeholderIfAbsent=true&apiKey=3844bdcc723b476d87e325492f777b0a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab326263d2f8e8fb94f00f91f1dd9a90d7f33991041d74aeb0cc1b5e14c4733d?placeholderIfAbsent=true&apiKey=3844bdcc723b476d87e325492f777b0a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab326263d2f8e8fb94f00f91f1dd9a90d7f33991041d74aeb0cc1b5e14c4733d?placeholderIfAbsent=true&apiKey=3844bdcc723b476d87e325492f777b0a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab326263d2f8e8fb94f00f91f1dd9a90d7f33991041d74aeb0cc1b5e14c4733d?placeholderIfAbsent=true&apiKey=3844bdcc723b476d87e325492f777b0a"
                className="create__image"
              />
            </div>
          </div>
          <div className="create__text-column">
            <div className="create__text-content">
              <div className="create__text-wrapper">
                <div className="create__text-block">
                  <div className="create__appointment-text">Reach out</div>
                  <div className="create__title">CO-CREATE WITH US</div>
                  <div className="create__description">
                    Bring your ideas, needs, and
                  </div>
                  <div className="create__description-line">
                    design desires to us. We will
                  </div>
                  <div className="create__description">
                    co-create with you and explore
                  </div>
                  <div className="create__description-line">
                    possibilities and materials.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
