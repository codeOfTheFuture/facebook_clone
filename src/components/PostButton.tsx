import React from "react";

interface PostButtonProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconName: string;
  rounded: string;
  toggleComments?: () => void;
  showComments: boolean;
}

const PostButton: React.FC<PostButtonProps> = (props) => {
  const { Icon, iconName, rounded, showComments, toggleComments } = props;

  return (
    <div
      className={`inputIcon rounded-none ${!showComments && rounded}`}
      onClick={toggleComments && toggleComments}
    >
      <Icon height={20} />
      <p className='text-xs sm:text-base'>{iconName}</p>
    </div>
  );
};

export default PostButton;
