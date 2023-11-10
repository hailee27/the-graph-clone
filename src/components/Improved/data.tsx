import { TypeTemplate } from '../common/TemplateCard/type';

interface TypeDataImprovement {
  householdBudget: TypeTemplate;
  livingEnvironmentProblem: TypeTemplate;
  justInCaseRisk: TypeTemplate;
  oldAgeRisk: TypeTemplate;
  disasterRisk: TypeTemplate;
  sickRisk: TypeTemplate;
  other: TypeTemplate;
}
const items = [
  {
    label: (
      <svg fill="none" height="18" viewBox="0 0 16 18" width="16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="9" r="7.5" stroke="#333333" />
        <circle cx="8" cy="9" r="3.5" stroke="#333333" />
      </svg>
    ),
    value: '1',
  },
];

export const dataImprovement: TypeDataImprovement = {
  householdBudget: {
    content: [
      {
        id: 1,
        items,
        title: '無駄な固定費が下がり、貯蓄が出来る！',
      },
      { id: 2, items, title: '変動費の削減ができ、貯蓄が出来る！' },
      {
        id: 3,
        items,
        title: '出産と育児の資金準備が出来る！',
      },
    ],
    image: './images/Group188.png',
    title: (
      <span>
        家計の
        <br />
        問題
      </span>
    ),
  },

  livingEnvironmentProblem: {
    content: [
      {
        id: 1,
        items,
        title: '機能性、快適性があり生活の質が高くなる！',
      },
      {
        id: 2,
        items,
        title: '家事導線、設備等、効率性が劇的に良くなり時間の余裕が出来る！',
      },
      {
        id: 3,
        items,
        title: '騒音問題、プライバシー問題が気にならない！',
      },
      {
        id: 4,
        items,
        title: '休息環境ができ、心と体をゆっくり休めることが出来る！',
      },
      {
        id: 5,
        items,
        title: (
          <span>
            制限がなくプライベートの充実が可能！
            <span className="text-[14px]">（楽器OK、ペットOK）</span>
          </span>
        ),
      },
      {
        id: 6,
        items,
        title: '夫婦円満、出産、育児、教育環境が改善される！',
      },
    ],
    image: './images/Group186.png',
    title: (
      <span>
        住環境の <br />
        問題 <span className="text-[22px] pl-[30px]">〜生活の質に関わる〜</span>
      </span>
    ),
  },
  justInCaseRisk: {
    content: [
      {
        id: 1,
        items,
        title: '必要な保障の対策が出来る！',
      },
      {
        id: 2,
        items,
        title: '万が一があっても家賃を払い続ける必要がない！',
      },
      {
        id: 3,
        items,
        title: '借りられない不安がない！',
      },
    ],
    image: './images/Group184.png',
    title: (
      <span>
        万が一の
        <br />
        リスク
      </span>
    ),
  },
  oldAgeRisk: {
    content: [
      {
        id: 1,
        items,
        title: '貯蓄と資産形成が出来る！リバースモーゲージが使える！',
      },
      {
        id: 2,
        items,
        title: '老後に家賃の準備が必要なく家計を削減！住居確保出来る安心！',
      },
      {
        id: 3,
        items,
        title: (
          <span className="leading-[26px]">
            親の介護、寝たきり、孤独のリスクが少なく、
            <br /> 人生の最終ステージの住環境が良い！
          </span>
        ),
      },
    ],
    image: './images/Group182.png',
    title: (
      <span>
        老後の <br />
        リスク
      </span>
    ),
  },
  disasterRisk: {
    content: [
      {
        id: 1,
        items,
        title: (
          <span className="leading-[26px]">
            耐震等級3、耐風等級2で、
            <br /> 強震や暴風による倒壊、損傷リスクの対策が出来る！
          </span>
        ),
      },
      {
        id: 2,
        items,
        title: '火災、延焼のリスクへの対策が出来る！',
      },
      {
        id: 3,
        items,
        title: 'ライフラインが止まるリスクへの対策が出来る！',
      },
      {
        id: 4,
        items,
        title: 'マイホームが避難所になる！',
      },
      {
        id: 5,
        items,
        title: '災害時にも資金的不安がなく安心！',
      },
    ],
    image: './images/Group180.png',
    title: (
      <span>
        災害の
        <br />
        リスク
      </span>
    ),
  },
  sickRisk: {
    content: [
      {
        id: 1,
        items,
        title: 'ストレスフリーの環境で病気になるリスクを下げられる！',
      },
      {
        id: 2,
        items,
        title: (
          <span>
            健康維持が容易に出来る環境！
            <span className="text-[14px]">（キッチン、お風呂等）</span>
          </span>
        ),
      },
      {
        id: 4,
        items,
        title: '断熱性能が高く有病率が低い！',
      },
    ],
    image: './images/Group178.png',
    title: (
      <span>
        病気の
        <br />
        リスク
      </span>
    ),
  },
  other: {
    content: [
      {
        id: 1,
        items,
        title: (
          <span>
            ゆとりある家族計画
            <span className="text-[14px]">（出産、育児、教育）</span>
            が出来る！
          </span>
        ),
      },
      {
        id: 2,
        items,
        title: '増税対策、インフレ対策も出来る！',
      },
      {
        id: 3,
        items,
        title: (
          <span>
            社会的信用が得られる！<span className="text-[14px]">（信用、計画性）</span>
          </span>
        ),
      },
      {
        id: 4,
        items,
        title: (
          <span>
            メンタルの充実が得られる！<span className="text-[14px]">（決断力、自信、覚悟、満足感、優越感）</span>
          </span>
        ),
      },
    ],
    image: './images/Group176.png',
    title: (
      <span>
        その他の <br />
        問題・リスク
      </span>
    ),
  },
};