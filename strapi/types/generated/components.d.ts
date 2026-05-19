import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicDynamicCollectionRendering
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_dynamic_collection_renderings';
  info: {
    displayName: 'dynamicCollectionRendering';
    icon: 'archive';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface MiscFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_misc_footer_columns';
  info: {
    displayName: 'footer-column';
  };
  attributes: {
    links: Schema.Attribute.Component<'misc.navigation-links', true>;
    title: Schema.Attribute.String;
  };
}

export interface MiscNavigationLinks extends Struct.ComponentSchema {
  collectionName: 'components_misc_navigation_links';
  info: {
    displayName: 'navigationLinks';
    icon: 'arrowRight';
  };
  attributes: {
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

export interface MiscPricePackage extends Struct.ComponentSchema {
  collectionName: 'components_misc_price_packages';
  info: {
    displayName: 'pricePackage';
  };
  attributes: {
    packageContent: Schema.Attribute.Blocks;
    packageOfferPrice: Schema.Attribute.String;
    packagePrice: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface MiscQuestionAndAnswers extends Struct.ComponentSchema {
  collectionName: 'components_misc_question_and_answers';
  info: {
    displayName: 'Question and Answers';
    icon: 'message';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface MiscSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_misc_social_links';
  info: {
    displayName: 'social-link';
    icon: 'link';
  };
  attributes: {
    socialLink: Schema.Attribute.Enumeration<
      ['Facebook', 'Instagram', 'Linkedin']
    >;
    url: Schema.Attribute.String;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    Content: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'book';
  };
  attributes: {
    QuestionAnswer: Schema.Attribute.Component<
      'misc.question-and-answers',
      true
    >;
  };
}

export interface SectionsFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_sections';
  info: {
    displayName: 'Features section';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isImageRight: Schema.Attribute.Boolean;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic.dynamic-collection-rendering': DynamicDynamicCollectionRendering;
      'misc.footer-column': MiscFooterColumn;
      'misc.navigation-links': MiscNavigationLinks;
      'misc.price-package': MiscPricePackage;
      'misc.question-and-answers': MiscQuestionAndAnswers;
      'misc.social-link': MiscSocialLink;
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.features-section': SectionsFeaturesSection;
      'sections.hero-section': SectionsHeroSection;
    }
  }
}
