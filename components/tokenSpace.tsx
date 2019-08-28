import React from "react";
import { range } from "lodash";
import posed, { PoseGroup } from "react-pose";

const TokenAnimationWrapper = posed.div({
  enter: { opacity: 1, y: 0, transition: { duration: 1000 } },
  exit: { opacity: 0, y: 10000, transition: { duration: 1000 } }
});

interface TokenProps {
  color: string;
  amount: number;
}

function Token(props: TokenProps) {
  const { color, amount } = props;

  return (
    <div className="relative h2 w2 h3-l w3-l mr2">
      <PoseGroup>
        {range(amount).map(i => (
          <TokenAnimationWrapper key={i}>
            <div
              style={{
                top: `-${i * 3}px`
              }}
              className={[
                "absolute ba flex items-center justify-center br-100 h2 w2 h3-l w3-l fw2 f5 f3-l white ba",
                `bg-${color}`,
                `b--${color}`
              ].join(" ")}
            >
              {i + 1}
            </div>
          </TokenAnimationWrapper>
        ))}
      </PoseGroup>
    </div>
  );
}

interface Props {
  hints: number;
  strikes: number;
}

export default function TokenSpace(props: Props) {
  const { hints, strikes } = props;

  return (
    <div className="flex flex-column-l">
      <Token color="hints" amount={hints} />
      <Token color="strikes" amount={strikes} />
    </div>
  );
}
