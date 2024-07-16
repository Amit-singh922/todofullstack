import { useState } from 'react';
import { useQueryClient } from "@tanstack/react-query"
import { useMutation } from "@tanstack/react-query"
import { deleteVideo } from "../apis/apiClient"

interface Props {
    id: number
    name: string
    url: string
    watched: boolean
}

export default function Video(props: Props) {
  const [isDeleted, setIsDeleted] = useState(false);
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
      mutationFn: (id: number) => deleteVideo(id),
      onSuccess: () => {
        console.log('Video deleted successfully');
        queryClient.invalidateQueries({ queryKey: ['videos'] });
        setIsDeleted(true);
      },
      onError: (error) => {
        console.error('Error deleting video:', error);
      }
    });
  
    function handleDelete() {
      deleteMutation.mutate(props.id);
    }
  
    return (
      <div>
        {!isDeleted ? (
          <>
            <button id="delete-button" onClick={handleDelete}>Delete Entry</button>
            <a target="_blank" rel="noreferrer" href={props.url}>
              {props.name}
            </a>
          </>
        ) : (
          <p>Video deleted</p>
        )}
        {deleteMutation.isLoading && <p>Deleting...</p>}
        {deleteMutation.isError && <p>Error deleting video.</p>}
      </div>
    );
  }