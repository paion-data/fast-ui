import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Less to Learn",
    Svg: require("@site/static/img/dancing.svg").default,
    description: (
      <>
        No need to learn and configure many build tools. Instant reloads help software engineer focus on development.
        When it's time to deploy, app bundles are optimized automatically.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/business.svg").default,
    description: <>FastUI lets us focus on our business logics, and the template will do the chores.</>,
  },
  {
    title: "Complete Control",
    Svg: require("@site/static/img/unbox.svg").default,
    description: (
      <>
        Under the hood, FastUI uses webpack, Babel, ESLint, and other amazing projects to power the app and gives
        developer complete control of every aspect of frontend development. All project configs are surfaced and
        directly tunable
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
