import { TypeTemplate } from '../common/TemplateCard/type';

interface TypeDataBeforeImprovement {
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
      <svg fill="none" height="20" viewBox="0 0 18 20" width="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.55386 10.1558C1.13185 9.64098 0.980364 9.06016 1.00201 8.32095C1.1048 4.95047 9.81543 -0.435261 15.6694 1.35558C18.3638 2.1784 17.0436 7.89414 11.0003 10.6926C8.51695 11.841 6.55841 12.1974 6.16887 10.961C5.83884 9.92259 7.42948 8.19334 10.508 7.56413C13.5864 6.93491 17.7307 7.99974 15.3989 11.4934C13.6784 14.0631 11.0328 15.7043 10.0264 15.1323C8.65221 14.3535 11.8497 12.4702 13.8786 12.611C15.1284 12.6947 16.2862 12.9631 16.2862 14.0015C16.2862 15.9243 14.8849 17.262 13.9002 17.3368C12.6937 17.4248 12.2717 16.3819 13.5432 15.8671C15.15 15.2203 16.1672 16.8131 15.9507 19"
          stroke="#333333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: '1',
  },
  {
    label: (
      <svg fill="none" height="18" viewBox="0 0 16 18" width="16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="9" r="7.5" stroke="#333333" />
        <circle cx="8" cy="9" r="3.5" stroke="#333333" />
      </svg>
    ),
    value: '2',
  },
];

export const dataBeforeImprovement: TypeDataBeforeImprovement = {
  householdBudget: {
    content: [
      {
        id: 1,
        items,
        title: '無駄な固定費が多く、貯蓄が難しい',
      },
      { id: 2, items, title: '変動費の削減が難しい環境で、貯蓄が難しい' },
      {
        id: 3,
        items,
        title: '出産と育児の資金準備が難しい',
      },
    ],
    image: './images/Group167.png',
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
        title: '機能性、快適性が無いため、生活の質が低くなる',
      },
      {
        id: 2,
        items,
        title: '家事導線、設備等、効率性が悪く、時間の余裕が無くなる',
      },
      {
        id: 3,
        items,
        title: '騒音問題、プライバシー問題を抱えている',
      },
      {
        id: 4,
        items,
        title: '休息環境が弱く、心も体も休めない',
      },
      {
        id: 5,
        items,
        title: '制限が多く、プライベートの充実が難しい（楽器禁止、ペット禁止）',
      },
      {
        id: 6,
        items,
        title: '夫婦円満、出産、育児、教育環境が脆弱',
      },
    ],
    image: './images/Group111.png',
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
        title: '必要な保障が足りない恐れがある',
      },
      {
        id: 2,
        items,
        title: '万が一があっても家賃は払い続けなければならない',
      },
      {
        id: 3,
        items,
        title: '保証人が必要、借りられない不安、社宅でなければならない',
      },
    ],
    image: './images/Group119.png',
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
        title: '貯蓄も資産形成も出来ず、貧困生活になるリスクが高い',
      },
      {
        id: 2,
        items,
        title: (
          <span className="leading-[26px]">
            老後に家賃が残り家計を圧迫、 <br />
            住居確保が出来ないリスクも高い
          </span>
        ),
      },
      {
        id: 3,
        items,
        title: (
          <span className="leading-[26px]">
            親の介護、寝たきり、孤独のリスクが高く、 <br /> 人生の最終ステージなのに住環境も悪い
          </span>
        ),
      },
    ],
    image: './images/Group127.png',
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
        title: '強震や暴風で、倒壊、損傷するリスクが高い',
      },
      {
        id: 2,
        items,
        title: '火災、延焼のリスクが高い',
      },
      {
        id: 3,
        items,
        title: 'ライフラインが止まるリスクが高い',
      },
      {
        id: 4,
        items,
        title: '避難所生活になるリスクが高い',
      },
      {
        id: 5,
        items,
        title: '災害時の資金的不安がある',
      },
    ],
    image: './images/Group172.png',
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
        title: 'ストレス環境で病気になるリスクが高い',
      },
      {
        id: 2,
        items,
        title: (
          <span>
            健康維持が難しい環境
            <span className="text-[14px]">（キッチン、お風呂等）</span>
          </span>
        ),
      },
      {
        id: 4,
        items,
        title: '断熱性能が低く有病率が高くなる',
      },
    ],
    image: './images/Group155.png',
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
            が弱い
          </span>
        ),
      },
      {
        id: 2,
        items,
        title: '増税対策、インフレ対策が出来ない',
      },
      {
        id: 3,
        items,
        title: (
          <span>
            社会的信用が得られない <span className="text-[14px]">（信用、計画性）</span>
          </span>
        ),
      },
      {
        id: 4,
        items,
        title: (
          <span>
            メンタルの充実が得られない
            <span className="text-[14px]">（決断力、自信、覚悟、満足感、優越感）</span>
          </span>
        ),
      },
    ],
    image: './images/Group165.png',
    title: (
      <span>
        その他の <br />
        問題・リスク
      </span>
    ),
  },
};
