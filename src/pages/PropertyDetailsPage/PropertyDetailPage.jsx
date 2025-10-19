import { useParams } from "react-router-dom";
import houses from "../../data/houseData";
import styles from "./PropertyDetailPage.module.css";

function PropertyDetailPage() {
  const { id } = useParams();
  const house = houses.find((h) => h.id.toString() === id);

  if (!house)
    return <div className={styles.notFound}>Property not found.</div>;

  // ✅ WhatsApp setup
  const whatsappNumber = "237674892302";
  const message = encodeURIComponent(
    `Hello, I'm interested in the property "${house.title}" priced at $${house.price.toLocaleString()}. Could you please share more details?`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  // ✅ Determine main media (use the first item — could be image or video)
  const firstMedia = house.images[0];
  const isVideo = firstMedia.endsWith(".mp4") || firstMedia.endsWith(".webm");

  return (
    <div className={styles.container}>
      {/* ✅ Main Media Section */}
      {isVideo ? (
        <video
          src={firstMedia}
          controls
          className={styles.mainMedia}
          poster="/assets/images/video-poster.jpg" // optional fallback image
        />
      ) : (
        <img
          src={firstMedia}
          alt={house.title}
          className={styles.mainMedia}
        />
      )}

      {/* ✅ Details Section */}
      <div className={styles.details}>
        <h1>{house.title}</h1>
        <p className={styles.location}>{house.location}</p>
        <p className={styles.price}>FCFA{house.price.toLocaleString()}</p>
        <p className={styles.description}>{house.description}</p>
      </div>

      {/* ✅ Gallery Section (images + videos mixed) */}
      <div className={styles.gallery}>
        {house.images.map((media, index) => {
          const isVid = media.endsWith(".mp4") || media.endsWith(".webm");
          return isVid ? (
            <video key={index} src={media} controls className={styles.galleryItem} />
          ) : (
            <img key={index} src={media} alt={`${house.title}-${index}`} className={styles.galleryItem} />
          );
        })}
      </div>

      {/* ✅ WhatsApp Button */}
      <div className={styles.buttonContainer}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.applyButton}
        >
          Apply via WhatsApp
        </a>
      </div>
    </div>
  );
}

export default PropertyDetailPage;
