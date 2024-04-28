import Link from "next/link";
import PropTypes from "prop-types";

export default function RestaurantItem({ id, pictureId, name, description }) {
  return (
    <div className="card">
      <img
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={name}
      />

      <div className="container">
        <h2>
          <Link href={`/detail/${id}`}>{name}</Link>
          <p>{description}</p>
          <br />
        </h2>
      </div>
    </div>
  );
}

RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
