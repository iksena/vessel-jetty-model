import { jettyData } from './constants';

const {
  mda1,
  mda2,
} = jettyData;

const rad2Deg = (radians) => Number((radians * 180) / Math.PI);

export const round = (number, digits = 2) => {
  const rounded = number.toFixed(digits);

  return Number.isNaN(rounded) || rounded === 'NaN' ? 0 : rounded;
};

export const mda1ToBow = (bowToCenter, vesselBreadth) => {
  const Lx = mda1.toCenter.x - bowToCenter;
  const Ly = mda1.toCenter.y + (vesselBreadth * 0.5);
  const headLine = Math.sqrt(Lx ** 2 + Ly ** 2);
  const headLineAngle = Math.atan(Lx / Ly);
  const headLineAngleDeg = rad2Deg(headLineAngle);
  const isValid = headLineAngleDeg >= mda1.minHeadlineDegree;

  return {
    Lx,
    Ly,
    headLine,
    headLineAngle,
    headLineAngleDeg,
    isValid,
  };
};

export const mda2ToStern = (sternToCenter, vesselBreadth) => {
  const Lx = mda2.toCenter.x - sternToCenter;
  const Ly = mda2.toCenter.y + (vesselBreadth * 0.5);
  const sternLine = Math.sqrt(Lx ** 2 + Ly ** 2);
  const sternLineAngle = Math.atan(Lx / Ly);
  const sternLineAngleDeg = rad2Deg(sternLineAngle);
  const isValid = sternLineAngleDeg >= mda2.minSternlineDegree;

  return {
    Lx,
    Ly,
    sternLine,
    sternLineAngle,
    sternLineAngleDeg,
    isValid,
  };
};
