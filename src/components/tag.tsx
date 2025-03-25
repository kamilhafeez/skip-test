import classnames from 'classnames';

interface TagProps {
  title: string;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ title, className }) => {
  return (
    <div
      className={classnames('text-xs text-white bg-indigo-600 px-2 py-1 rounded-3xl', className)}
    >
      {title}
    </div>
  );
};
