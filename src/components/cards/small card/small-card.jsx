import React from "react";
import styles from "./small-card.module.css";

function SmallCard(props) {
    return (
        <div className={styles.cardWrapper}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="15" fill="#2F8447" />
                <path d="M30.2083 38.5425H9.69162C8.85155 38.5425 8.43151 38.5425 8.11064 38.379C7.8284 38.2352 7.59893 38.0057 7.45512 37.7235C7.29163 37.4026 7.29163 36.9826 7.29163 36.1425V11.775C7.29163 10.9349 7.29163 10.5149 7.45512 10.194C7.59893 9.91177 7.8284 9.6823 8.11064 9.53849C8.43151 9.375 8.85155 9.375 9.69163 9.375H18.764C19.1397 9.375 19.3276 9.375 19.4981 9.42679C19.649 9.47263 19.7895 9.5478 19.9113 9.64798C20.049 9.76114 20.1532 9.91745 20.3616 10.2301L23.3883 14.7708C23.5967 15.0834 23.7009 15.2397 23.8386 15.3529C23.9604 15.453 24.1009 15.5282 24.2518 15.574C24.4224 15.6258 24.6102 15.6258 24.9859 15.6258H36.1416C36.9817 15.6258 37.4017 15.6258 37.7226 15.7893C38.0049 15.9331 38.2343 16.1626 38.3781 16.4448C38.5416 16.7657 38.5416 17.1858 38.5416 18.0258V19.7917M19.7916 28.125H34.375" stroke="#5FC192" stroke-linecap="round" />
                <path d="M12.9946 21.4328C13.1913 20.8427 13.2897 20.5476 13.4721 20.3294C13.6332 20.1368 13.8401 19.9877 14.0738 19.8958C14.3384 19.7917 14.6495 19.7917 15.2715 19.7917L41.4619 19.7924C42.5861 19.7924 43.1482 19.7925 43.5172 20.0278C43.8401 20.2338 44.072 20.5556 44.1653 20.9272C44.2719 21.3516 44.0942 21.8849 43.7387 22.9514L39.0886 36.9014C38.8919 37.4916 38.7936 37.7866 38.6112 38.0048C38.4501 38.1974 38.2432 38.3465 38.0095 38.4384C37.7449 38.5425 37.4338 38.5425 36.8118 38.5425H10.6214C9.4972 38.5425 8.9351 38.5425 8.56612 38.3072C8.24313 38.1012 8.0112 37.7794 7.9179 37.4078C7.81132 36.9834 7.98906 36.4501 8.34455 35.3836L12.9946 21.4328Z" stroke="#5FC192" />
            </svg>
            <p className={styles.cardTitle}>Отчет</p>
        </div>
    )
}

export default SmallCard;