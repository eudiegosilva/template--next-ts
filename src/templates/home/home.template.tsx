import { Example } from 'components';

import * as s from './home.template.styles';

const HomeTemplate = () => {
  return (
    <s.Wrapper>
      <h1>Title</h1>
      <h5>Subtitle</h5>
      <Example.Button>button label</Example.Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit
        perferendis unde consequatur labore quasi illum, est porro hic dolorem
        sunt dolor ratione blanditiis error deserunt necessitatibus quibusdam
        natus dolores facere libero, odit rerum nostrum? Reiciendis et cum sequi
        fuga est fugiat quis ratione voluptate corporis similique optio ipsam
        porro, vel asperiores obcaecati sapiente ipsum labore earum modi quo,
        nostrum quidem. Similique eligendi quae laudantium doloremque aut! Ea
        nihil numquam id dolorem alias rem, delectus error ducimus eveniet
        dignissimos, vel culpa provident corporis doloremque aliquid. Commodi
        illum eos enim, libero perferendis a fugit mollitia sint porro
        distinctio consequatur fuga nulla.
      </p>
    </s.Wrapper>
  );
};

export default HomeTemplate;
