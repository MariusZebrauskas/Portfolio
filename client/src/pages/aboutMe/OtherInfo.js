import React from 'react';
import {
  OtherInfoHeader,
  OtherInfoWrapper,
  EducationIcon,
  GymIcon,
  LanguagesIcon,
  MotoIcon,
  OtherWrapper,
  OtherSingleWrapper,
  OtherSingleDescription,
  OtherP,
  OtherI,
} from './aboutStyles';
const OtherInfo = () => {
  return (
    <OtherInfoWrapper>
      <OtherInfoHeader>Other Info</OtherInfoHeader>
      <OtherWrapper>
        <section>
          <OtherSingleWrapper>
            <EducationIcon />
            <OtherSingleDescription>
              <OtherI>Education</OtherI>
              <OtherP>College Degree "Land Survey"</OtherP>
            </OtherSingleDescription>
          </OtherSingleWrapper>
          <OtherSingleWrapper>
            <GymIcon />
            <OtherSingleDescription>
              <OtherI>Hobby</OtherI>
              <OtherP>"GYM"</OtherP>
            </OtherSingleDescription>
          </OtherSingleWrapper>
        </section>
        <section>
          <OtherSingleWrapper>
            <LanguagesIcon />
            <OtherSingleDescription>
              <OtherI>Languages</OtherI>
              <OtherP>English, Lithuanian</OtherP>
            </OtherSingleDescription>
          </OtherSingleWrapper>
          <OtherSingleWrapper>
            <MotoIcon last='true' />
            <OtherSingleDescription>
              <OtherI>Motto</OtherI>
              <OtherP>"Lern Something New Every Day"</OtherP>
            </OtherSingleDescription>
          </OtherSingleWrapper>
        </section>
      </OtherWrapper>
    </OtherInfoWrapper>
  );
};

export default OtherInfo;
