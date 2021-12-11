import React from "react";

interface PostButtonProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconName: string;
  rounded: string;
  toggleComments?: () => void;
  likeButtonEnter?: () => void;
  likeButtonLeave?: () => void;
  showComments: boolean;
}

const PostButton: React.FC<PostButtonProps> = (props) => {
  const {
    Icon,
    iconName,
    rounded,
    showComments,
    toggleComments,
    likeButtonEnter,
    likeButtonLeave,
  } = props;

  return (
    <div
      className={`inputIcon rounded-none ${!showComments && rounded}`}
      onClick={toggleComments && toggleComments}
      onMouseEnter={likeButtonEnter && likeButtonEnter}
      onMouseLeave={likeButtonLeave && likeButtonLeave}
    >
      <Icon height={20} />
      <p className='text-xs sm:text-base'>{iconName}</p>
    </div>
  );
};

export default PostButton;
