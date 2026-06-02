import type { UserRepository } from "../repositories/types";

export default function createPost({
  makeInputObj,
  userRepository,
  logger,
  errorMsgs,
}: {
  makeInputObj: (args: { params: Record<string, unknown> }) => {
    username: () => string;
    password: () => string;
    created: () => number;
    modified: () => number;
  };
  userRepository: UserRepository;
  logger: { info: (msg: string) => void };
  errorMsgs: { EXISTING_USER: string };
}) {
  return Object.freeze({ post });

  async function post({ params }: { params: Record<string, unknown> }) {
    try {
      logger.info("[USE-CASE][POST] Inserting user - START!");
      const userFactory = makeInputObj({ params });

      const user = {
        username: userFactory.username(),
        password: userFactory.password(),
        created: userFactory.created(),
        modified: userFactory.modified(),
      };

      await userRepository.insert(user);
      logger.info("[POST] [USE-CASE] Inserting user - DONE!");
      return user;
    } catch (e) {
      logger.info("[POST] [USE-CASE] Inserting user - FAILED!");
      throw e;
    }
  }
}
