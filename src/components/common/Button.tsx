import { twMerge } from 'tailwind-merge';
import { CallToActionType, LinkOrButton } from '~/shared/types';

const Button = ({ callToAction, containerClass, linkClass, iconClass, onClick }: LinkOrButton) => {
  const { text, icon: Icon } = callToAction as CallToActionType;

  return (
    <>
      {(text || Icon) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
          <button
            onClick={onClick}
            className={twMerge('inline-flex items-center justify-center w-full sm:mb-0', linkClass)}
          >
            {Icon && (
              <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5' : ''}`, iconClass)} />
            )}
            {text}
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
