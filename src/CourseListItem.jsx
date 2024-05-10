import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    border: "1px solid #ccc",
    borderRadius: theme.spacing(1),
  },
  instructorImg: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginRight: theme.spacing(2),
    objectFit: "cover",
    borderRadius: theme.spacing(0),
  },
  courseDetails: {
    flex: 1,
    marginRight: theme.spacing(2),
    textAlign: "left",
  },
  courseName: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  courseInfo: {
    color: "#777",
    fontSize: "0.9rem",
    marginBottom: theme.spacing(1),
  },
  bestsellerTag: {
    marginRight: theme.spacing(1),
    backgroundColor: "#FFD700",
    color: "#fff",
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(0),
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
    color: "#777",
  },
  ratingStar: {
    color: "#ffd700",
    marginRight: theme.spacing(0.5),
  },
  enrolled: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
    color: "#777",
  },
  subscriptionFee: {
    fontWeight: "bold",
    textAlign: "middle",
    fontSize: "1.1rem",
    color: "#777",
    margin: "30px",
  },
  heartButtonContainer: {
    position: "relative",
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: "50%",
    border: "2px solid #ccc",
    cursor: "pointer",
  },
  heartButton: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#f2f2f2",
  },
  filledHeart: {
    color: "red",
  },
}));

const CourseListItem = ({
  instructorImg,
  courseName,
  rating,
  enrolledStudents,
  subscriptionFee,
  totalHours,
  dateUpdated,
  isBestseller,
}) => {
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={classes.root}>
      <Avatar
        alt="Instructor"
        src={instructorImg}
        className={classes.instructorImg}
      />
      <div className={classes.courseDetails}>
        <div className={classes.courseName}>{courseName}</div>
        <div className={classes.courseInfo}>
          {isBestseller && (
            <span className={classes.bestsellerTag}>Bestseller</span>
          )}
          <span>
            &bull; {totalHours} Hours &bull; Updated: {dateUpdated}
          </span>
        </div>
        <div className={classes.ratingContainer}>
          <div className={classes.rating}>
            <StarIcon className={classes.ratingStar} />
            <span>{rating}/5</span>
          </div>
          <div className={classes.enrolled}>
            <PeopleIcon />
            <span>{enrolledStudents}</span>
          </div>
        </div>
      </div>
      <div className={classes.subscriptionFee}>${subscriptionFee}</div>
      <div className={classes.heartButtonContainer} onClick={toggleFavorite}>
        <div
          className={`${classes.heartButton} ${
            isFavorite && classes.filledHeart
          }`}
        >
          <FavoriteIcon />
        </div>
      </div>
    </div>
  );
};

export default CourseListItem;
