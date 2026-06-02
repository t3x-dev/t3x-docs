import React from 'react';
import styles from './styles.module.css';

type DevStatus = 'released' | 'beta' | 'alpha' | 'preview' | 'dev';
type VerifyStatus = 'verified' | 'unverified';

interface DocBadgesProps {
  status?: DevStatus;
  verified?: VerifyStatus;
}

const statusConfig: Record<DevStatus, { label: string; className: string }> = {
  released: { label: 'Released', className: styles.released },
  beta: { label: 'Beta', className: styles.beta },
  alpha: { label: 'Alpha', className: styles.alpha },
  preview: { label: 'Preview', className: styles.preview },
  dev: { label: 'In Development', className: styles.dev },
};

const verifyConfig: Record<VerifyStatus, { label: string; className: string }> = {
  verified: { label: 'Verified', className: styles.verified },
  unverified: { label: 'Unverified', className: styles.unverified },
};

export default function DocBadges({ status, verified }: DocBadgesProps): React.ReactElement | null {
  if (!status && !verified) return null;

  return (
    <div className={styles.badgeContainer}>
      {status && (
        <span className={`${styles.badge} ${statusConfig[status].className}`}>
          {statusConfig[status].label}
        </span>
      )}
      {verified && (
        <span className={`${styles.badge} ${verifyConfig[verified].className}`}>
          {verifyConfig[verified].label}
        </span>
      )}
    </div>
  );
}
