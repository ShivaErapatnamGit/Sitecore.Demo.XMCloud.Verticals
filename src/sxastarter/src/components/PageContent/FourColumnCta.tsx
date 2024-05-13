import React from 'react';
import { Field, ImageField, LinkField, Image, Text, Link } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title1: Field<string>;
  Text1: Field<string>;
  Image1: ImageField;
  Link1: LinkField;
  Title2: Field<string>;
  Text2: Field<string>;
  Image2: ImageField;
  Link2: LinkField;
  Title3: Field<string>;
  Text3: Field<string>;
  Image3: ImageField;
  Link3: LinkField;
  Title4: Field<string>;
  Text4: Field<string>;
  Image4: ImageField;
  Link4: LinkField;
}

export type FourColumnCtaProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FourColumnCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component component-spaced four-column-cta ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <Link field={props.fields.Link1}>
              <div className="content-wrapper">
                <Image field={props.fields.Image1} height={' '} />
                <div className="text-wrapper">
                  <h2>
                    <Text field={props.fields.Title1} />
                  </h2>
                  <p>
                    <Text field={props.fields.Text1} />
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-lg-3">
            <Link field={props.fields.Link2}>
              <div className="content-wrapper">
                <Image field={props.fields.Image2} height={' '} />
                <div className="text-wrapper">
                  <h2>
                    <Text field={props.fields.Title2} />
                  </h2>
                  <p>
                    <Text field={props.fields.Text2} />
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-lg-3">
            <Link field={props.fields.Link3}>
              <div className="content-wrapper">
                <Image field={props.fields.Image3} height={' '} />
                <div className="text-wrapper">
                  <h2>
                    <Text field={props.fields.Title3} />
                  </h2>
                  <p>
                    <Text field={props.fields.Text3} />
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-lg-3">
            <Link field={props.fields.Link4}>
              <div className="content-wrapper">
                <Image field={props.fields.Image4} height={' '} />
                <div className="text-wrapper">
                  <h2>
                    <Text field={props.fields.Title4} />
                  </h2>
                  <p>
                    <Text field={props.fields.Text4} />
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
